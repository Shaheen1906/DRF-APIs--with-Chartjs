from django.contrib import admin

# Register your models here.
from api.models import chartdb

@admin.register(chartdb)
class chartAdmin(admin.ModelAdmin):
    list_display = ('id','symbol','rank','date')