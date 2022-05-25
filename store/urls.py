from django.urls import path

from . import views

urlpatterns = [
	#Leave as empty string for base url
	path('', views.index, name="index"),
	path('reservation/', views.reservation, name="reservation"),
	path('store/', views.store, name="store"),
	path('detail/<int:id>/', views.detail, name="detail"),
	path('view/<int:id>/', views.view, name="view"),
	path('cart/', views.cart, name="cart"),
	path('checkout/', views.checkout, name="checkout"),
	path('booking/', views.booking, name="booking"),
	path('photoselection/', views.photoselection, name="photoselection"),
	path('recognition/', views.recognition, name="recognition"),
	path('concept/', views.concept, name="concept"),


	path('update_item/', views.updateItem, name="update_item"),
	path('process_order/', views.processOrder, name="process_order"),
	path('process_resdata/', views.processResData, name="process_resdata"),
	path('process_familydata/', views.processFamilyData, name="process_familydata"),
	path('process_resphotodata/', views.processResPhotoData, name="process_resphotodata"),


	path('payment/', views.payment, name="payment"),
	path('calendar/', views.calendar, name="calendar"),

]
