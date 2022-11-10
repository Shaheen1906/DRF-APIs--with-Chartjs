from django.db import models

# Create your models here.

    
class chartdb(models.Model):
    symbol = models.CharField(max_length= 50)
    rank = models.IntegerField()
    date = models.DateField()
    
    def __str__(self):
        return self.symbol 