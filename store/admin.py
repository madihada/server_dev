# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import *

admin.site.register(Customer)
admin.site.register(Photo)
admin.site.register(FamilyPhoto)
admin.site.register(FamilyFrame)
admin.site.register(FamilyBWPhoto)
admin.site.register(FamilyBWFrame)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(ReservationData)
admin.site.register(FamilyReservationData)

admin.site.register(Hanboks)
admin.site.register(HanbokDB)
