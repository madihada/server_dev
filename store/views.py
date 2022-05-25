# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import JsonResponse
import json
import datetime
from .models import *
from .utils import cookieCart, cartData, guestOrder

from PIL import Image
import numpy as np

def payment(request):
	context = {}
	return render(request, 'store/payment.html', context)

def recognition(request):
	# Version 1 (working properly but slow)
	# if request.method == 'POST':
	# 	images = request.FILES['images']
	# 	photo = Hanboks.objects.create(
	# 			name='test',
	# 			price=0,
	# 			image=images,
	# 		)
	# 	photo.save()

	# # 이미지 데이터를 Average Hash로 변환하기 (1)
	# def average_hash(fname, size = 100):
	# 	img = Image.open(fname)   # 이미지 데이터 열기 (2)
	# 	img = img.convert('L')    # 흑백으로 변환 (3)
	# 	img = img.resize((size,size), Image.ANTIALIAS) # 리사이즈하기(4)
	# 	pixel_data = img.getdata()   #픽셀 데이터 가져오기 (5)
	# 	pixels = np.array(pixel_data)   #Numpy 배열로 변환하기 (6)
	# 	pixels = pixels.reshape((size,size))   # 2차원 배열로 변환하기 (7) 
	# 	avg = pixels.mean()   # 평균 구하기 (8)
	# 	diff = 1 * (pixels > avg)   # 평균보다 크면 1, 작으면 0으로 변환
	# 	return diff

	# # 이전 해시로 변환하기 (10)
	# def np2hash(n):
	# 	bhash = []
	# 	for nl in ahash.tolist():
	# 		sl = [str(i) for i in nl]
	# 		s2 = "".join(sl)
	# 		i = int(s2, 2)   # 이진수를 정수로 변환하기
	# 		bhash.append("%04x" % i)
	# 	return "".join(bhash)

	# # Average Hash 출력하기
	# allHanbokDB = HanbokDB.objects.all()
	# imageUrls = []
	# for hanbokDB in allHanbokDB:
	# 	hanbokDB = "/Users/sim_macbookpro/Desktop/Project/madihada/static/images/" + str(hanbokDB.image)
	# 	imageUrls.append(hanbokDB)

	# ahashLists = []
	# for imageUrl in imageUrls:
	# 	ahash = average_hash(imageUrl)
	# 	ahashLists.append(ahash)


	# 	# Test ahash 가져오기
	# allHanboks = Hanboks.objects.all()
	# testUrls = []
	# print(allHanboks[0].image)
	# ahash_test1 = average_hash('/Users/sim_macbookpro/Desktop/Project/madihada/static/images/' + str(allHanboks[0].image))
	# testHanbok = allHanboks[0]


	# f_test1 =[]
	# print("----------------------------")
	# for ahashList in ahashLists:
	# 	f_test1.append((ahash_test1 == ahashList).sum()) 

	# print(f_test1)
	# maxValue = f_test1[0]
	# for i in range(1, len(f_test1)):
	# 	if maxValue < f_test1[i]:
	# 		maxValue = f_test1[i]
	# final1 = f_test1.index(maxValue) + 1
	# anticipatedHanbok = allHanbokDB[final1-1]


	# context = {'final1': final1, 'answer': 1, 'testHanbok': testHanbok, 'anticipatedHanbok': anticipatedHanbok}
	# return render(request, 'store/recognition.html', context)


	# Version 2
	if request.method == 'POST':
		images = request.FILES['images']
		photo = Hanboks.objects.create(
				name='test',
				price=0,
				image=images,
			)
		photo.save()

	# 이미지 데이터를 Average Hash로 변환하기 (1)
	def average_hash(fname, size = 100):
		img = Image.open(fname)   # 이미지 데이터 열기 (2)
		img = img.convert('L')    # 흑백으로 변환 (3)
		img = img.resize((size,size), Image.ANTIALIAS) # 리사이즈하기(4)
		pixel_data = img.getdata()   #픽셀 데이터 가져오기 (5)
		pixels = np.array(pixel_data)   #Numpy 배열로 변환하기 (6)
		pixels = pixels.reshape((size,size))   # 2차원 배열로 변환하기 (7) 
		avg = pixels.mean()   # 평균 구하기 (8)
		diff = 1 * (pixels > avg)   # 평균보다 크면 1, 작으면 0으로 변환
		return diff

	# 이전 해시로 변환하기 (10)
	def np2hash(n):
		bhash = []
		for nl in ahash.tolist():
			sl = [str(i) for i in nl]
			s2 = "".join(sl)
			i = int(s2, 2)   # 이진수를 정수로 변환하기
			bhash.append("%04x" % i)
		return "".join(bhash)

	# Average Hash 출력하기
	allHanbokDB = HanbokDB.objects.all()
	ahashLists = np.load("/Users/sim_macbookpro/Desktop/Project/madihada/a.npy")


	# Test ahash 가져오기
	allHanboks = Hanboks.objects.all()
	testUrls = []
	print(allHanboks[0].image)
	ahash_test1 = average_hash('/Users/sim_macbookpro/Desktop/Project/madihada/static/images/' + str(allHanboks[0].image))
	testHanbok = allHanboks[0]


	f_test1 =[]
	print("----------------------------")
	for ahashList in ahashLists:
		f_test1.append((ahash_test1 == ahashList).sum()) 

	print(f_test1)
	maxValue = f_test1[0]
	for i in range(1, len(f_test1)):
		if maxValue < f_test1[i]:
			maxValue = f_test1[i]
	final1 = f_test1.index(maxValue) + 1
	anticipatedHanbok = allHanbokDB[final1-1]


	context = {'final1': final1, 'answer': 1, 'testHanbok': testHanbok, 'anticipatedHanbok': anticipatedHanbok}
	return render(request, 'store/recognition.html', context)

def reservation(request):
	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	categories = Category.objects.all()

	products = Product.objects.all()
	context = {'products': products, 'cartItems': cartItems, 'categories': categories}
	return render(request, 'store/reservation.html', context)

def booking(request):
	# familyPhotos, frame, BW, BWFrame
	familyphotos = FamilyPhoto.objects.all()
	familyframes = FamilyFrame.objects.all()
	familybwphotos = FamilyBWPhoto.objects.all()
	familybwframes = FamilyBWFrame.objects.all()
	# 
	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	categories = Category.objects.all()

	products = Product.objects.all()
	context = {'products': products, 
		'cartItems': cartItems, 
		'categories': categories, 
		'familyphotos' : familyphotos,
		'familyframes' : familyframes,
		'familybwphotos' : familybwphotos,
		'familybwframes' : familybwframes,
		}
	return render(request, 'store/booking.html', context)

def concept(request):
	# familyPhotos, frame, BW, BWFrame
	familyphotos = FamilyPhoto.objects.all()
	familyframes = FamilyFrame.objects.all()
	familybwphotos = FamilyBWPhoto.objects.all()
	familybwframes = FamilyBWFrame.objects.all()
	# 
	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	categories = Category.objects.all()

	products = Product.objects.all()
	context = {'products': products, 
		'cartItems': cartItems, 
		'categories': categories, 
		'familyphotos' : familyphotos,
		'familyframes' : familyframes,
		'familybwphotos' : familybwphotos,
		'familybwframes' : familybwframes,
		}
	return render(request, 'store/concept.html', context)


def index(request):

	if request.user.is_authenticated:
		user = request.user
		customer, created = Customer.objects.get_or_create(user=user, name=user)
		order, created = Order.objects.get_or_create(customer=customer, complete=False)
		items = order.orderitem_set.all()
		cartItems = order.get_cart_items
	else:
		#Create empty cart for now for non-logged in user
		order = {'get_cart_total':0, 'get_cart_items':0, 'shipping':False}
		cartItems = order['get_cart_items']
	photos = Photo.objects.all()
	context = {'photos':photos, 'cartItems':cartItems}
	return render(request, 'store/index.html', context)


def store(request):
	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	products = Product.objects.all()
	context = {'products': products, 'cartItems': cartItems}
	return render(request, 'store/store.html', context)

def detail(request, id):
	obj = Product.objects.get(id=id)

	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	context = {'items': items, 'order': order, 'cartItems': cartItems, 'object': obj}
	return render(request, 'store/detail.html', context)

def view(request, id):
	obj = Product.objects.get(id=id)

	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	context = {'items': items, 'order': order, 'cartItems': cartItems, 'object': obj}
	return render(request, 'store/view.html', context)


def cart(request):
	data = cartData(request)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	context = {'items': items, 'order': order, 'cartItems': cartItems}
	return render(request, 'store/cart.html', context)


def checkout(request):
	data = cartData(request)
	finalResDatas = ReservationData.objects.all()
	finalResData = finalResDatas[len(finalResDatas)-1]
	finalResDataStr = str(finalResData)
	fResData = finalResDataStr.split()
	fResDataStr = fResData[1][1:-2]+'년 '+fResData[3][1:-2]+'월 '+fResData[5][1:-2]+'일 '+'시간 '+ fResData[11][1:-2]
	print(fResData[1][1:-2],fResData[3][1:-2],fResData[5][1:-2],fResData[7][1:-2],fResData[9][1:-2],fResData[11][1:-2])
	print('finalResData is', finalResData)
	print('len(finalResDatas)-1 is', len(finalResDatas)-1)
	print('finalResDatas is', finalResDatas)

	cartItems = data['cartItems']
	order = data['order']
	items = data['items']

	# family photo information
	finalFamilyResData = FamilyReservationData.objects.last()
	finalFamilyResDataStr = str(finalFamilyResData)
	fFamilyData = finalFamilyResDataStr.replace('{','').replace('{','').replace('\'','')
	fFdata = fFamilyData.split(',')
	fPhoto = fFdata[0]
	fFrame = fFdata[2]
	fBW = fFdata[6]
	fBWFrame = fFdata[4]
	fPrice = int(fFdata[1]) + int(fFdata[3]) + int(fFdata[5]) + int(fFdata[7][0:-1])
	finalFamilyResData.price = int(fPrice)
	finalFamilyResData.save()

	context = {'items': items, 'order': order, 'cartItems': cartItems, 'fResDataStr':fResDataStr, 'fPhoto':fPhoto, 'fFrame':fFrame, 'fBW':fBW, 'fBWFrame':fBWFrame, 'fPrice':fPrice}
	return render(request, 'store/checkout.html', context)


def updateItem(request):
	data = json.loads(request.body)
	productId = data['productId']
	action = data['action']
	# print('Action:', action)
	# print('Product:', productId)

	customer = request.user.customer
	product = Product.objects.get(id=productId)
	order, created = Order.objects.get_or_create(customer=customer, complete=False)

	orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

	if action == 'add':
		orderItem.quantity = (orderItem.quantity + 1)
	elif action == 'remove':
		orderItem.quantity = (orderItem.quantity - 1)

	orderItem.save()

	if orderItem.quantity <= 0:
		orderItem.delete()

	return JsonResponse('Item was added', safe=False)


def processOrder(request):
	transaction_id = datetime.datetime.now().timestamp()
	data = json.loads(request.body)
	finalResData = ReservationData.objects.last()
	finalResData.complete = True
	finalResData.save()
	print('##finalResData is ',  finalResData)
	if request.user.is_authenticated:
		customer = request.user.customer
		order, created = Order.objects.get_or_create(customer=customer, complete=False)

	else:
		customer, order = guestOrder(request, data)

	total = float(data['form']['total'])
	order.transaction_id = transaction_id

	if total == order.get_cart_total:
		order.complete = True
	order.save()

	if order.shipping == True:
		ShippingAddress.objects.create(
			customer=customer,
			order=order,
			address=data['shipping']['address'],
			city=data['shipping']['city'],
			state=data['shipping']['state'],
			zipcode=data['shipping']['zipcode'],
		)

	return JsonResponse('Payment submitted..', safe=False)


def processResData(request):
	data = json.loads(request.body)
	ryear = data['ryear']
	rmonth = data['rmonth']
	rdate = data['rdate']
	rtime = data['rtime']
	rindex = data['rindex']
	rmin = data['rmin']
	rduration = data['rduration']
	finalData = {'year':ryear, 'month':rmonth, 'date':rdate, 'time':rtime, 'index':rindex, 'min':rmin, 'duration':rduration}
	# print(ryear,rmonth,rdate,rtime,rmin)

	ReservationData.objects.create(
		date_reservated = finalData,
		complete = False
	)
	return JsonResponse('Payment submitted..', safe=False)

def processResPhotoData(request):
	data = json.loads(request.body)
	one = data['one']
	two = data['two']
	three = data['three']
	four = data['four']
	five = data['five']
	six = data['six']
	seven = data['seven']
	eight = data['eight']
	finalData = {'one':one, 'two':two, 'three':three, 'four':four, 'five':five, 'six':six, 'seven':seven, 'eight':eight}
	print('what have i done is ...', one,two,three,four,five, six, seven, eight)

	return JsonResponse('Payment submitted..', safe=False)


def processFamilyData(request):
	data = json.loads(request.body)
	fphoto = data['fphoto']
	fframe = data['fframe']
	fbw = data['fbw']
	fbwframe = data['fbwframe']
	finalData = {fphoto, fframe, fbw, fbwframe}
	# print(ryear,rmonth,rdate,rtime,rmin)

	FamilyReservationData.objects.create(
		date_reservated = finalData,
		complete = False
	)

	return JsonResponse('Payment submitted..', safe=False)

def calendar(request):
	ress = ReservationData.objects.filter(complete=True)
	print('ress is :', ress)
	resInfomations = []
	for res in ress:
		resInfomations.append(str(res))
	# print('resInfomations[0] is :', resInfomations[0])
	context = {'resInfomations':resInfomations}
	return render(request, 'store/calendar.html', context)


def photoselection(request):
	ress = ReservationData.objects.filter(complete=True)
	print('ress is :', ress)
	resInfomations = []
	for res in ress:
		resInfomations.append(str(res))
	# print('resInfomations[0] is :', resInfomations[0])
	context = {'resInfomations':resInfomations}
	return render(request, 'store/photoselection.html', context)
