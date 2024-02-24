from django.urls import path
from . import views

urlpatterns = [
    path('', views.getAllData, name='getAllData'),
    path('filterbyseason/<int:index>', views.getFilteredData, name='getFilteredData'),
    path('<int:index>/', views.getSpecificData, name='getSpecificData'),
]