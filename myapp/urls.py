from django.contrib import admin
from django.urls import path, include
from myapp import views
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.menu_view, name='home'),
    path('menu/', views.menu_list, name='menu_list'),
    path('menu/new/', views.menu_create, name='menu_create'),
    path('menu/edit/<int:pk>/', views.menu_update, name='menu_update'),
    path('delete/<int:pk>/', views.menu_delete, name='menu_delete'),
]