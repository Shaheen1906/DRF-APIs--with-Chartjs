from rest_framework import generics
from api.serializer import chartserializer
from api.models import chartdb



class ChartDetail(generics.ListAPIView):
    queryset = chartdb.objects.all()
    serializer_class =chartserializer
    
