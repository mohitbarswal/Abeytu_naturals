from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Homesection(models.Model):
    banner_heading = RichTextField(max_length=200, blank=True, null=True)
    banner_image = models.FileField(upload_to='images/', blank=True, null=True)
    product_heading = RichTextField(max_length=200, blank=True, null=True)
    product_data = RichTextField(max_length=700, blank=True, null=True)
    product_image = models.FileField(upload_to='images/', blank=True, null=True)
    client_name = RichTextField(max_length=200, blank=True, null=True)
    feedback_data = RichTextField(max_length=700, blank=True, null=True)
    collab_heading = RichTextField(max_length=200, blank=True, null=True)
    collab_image = models.FileField(upload_to='images/', blank=True, null=True)
    collab_data = RichTextField(max_length=700, blank=True, null=True)

class Bestseller(models.Model):
    homesection = models.ForeignKey(Homesection, on_delete=models.CASCADE, related_name='home_bestseller_key', blank=True, null=True)
    best_seller_heading = RichTextField(max_length=200, blank=True, null=True)
    best_seller_image = models.FileField(upload_to='images/', blank=True, null=True)
    best_seller_data = RichTextField(max_length=700, blank=True, null=True)
    
class Addunique(models.Model):
    homesection = models.ForeignKey(Homesection, on_delete=models.CASCADE, related_name='home_unique_key', blank=True, null=True)
    unique_heading = RichTextField(max_length=200, blank=True, null=True)
    unique_image = models.FileField(upload_to='images/', blank=True, null=True)
    
    