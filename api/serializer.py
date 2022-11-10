from rest_framework import serializers
from api.models import chartdb

class chartserializer(serializers.ModelSerializer):
    class Meta:
        model = chartdb
        fields =['id','symbol','rank','date']