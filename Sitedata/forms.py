from django import forms
from .models import Homesection, Addunique, Bestseller



class HomepageForm(forms.ModelForm):
    class Meta:
        model = Homesection
        fields = "__all__"

class Adduniqueform(forms.ModelForm):
    class Meta:
        model = Addunique
        fields = "__all__"

class Bestsellerform(forms.ModelForm):
    class Meta:
        model = Bestseller
        fields = "__all__"