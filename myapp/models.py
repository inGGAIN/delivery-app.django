from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    categories = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='images/products', null=True, blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name