from django.contrib import admin
from django.urls import path, include
from myapp import views
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.menu_view, name='home'),
]