from django.urls import path
from . import views
urlpatterns = [
    path('',views.homefun),
    path('homepage/',views.save_homepage),
    path('about/',views.aboutfun),
    path('edit/<int:id>/',views.edit_homepage, name="updatedata"),
    path('deleteseller/',views.delete_seller, name="deleteseller"),
    path('deleteunique/',views.delete_unique, name="deleteunique"),
    
]