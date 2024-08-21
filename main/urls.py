from django.urls import path
from . import views

urlpatterns = [
    #frontend
    path('', views.index, name='home'),
]