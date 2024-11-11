from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from .forms import MenuItemForm
from .models import MenuItem

def home(request):
    menu_items = MenuItem.objects.all()
    context = {}
    return render(request, 'myapp/home.html', context)

def menu_view(request):
    # Mengambil semua data dari model MenuItem yang ada di database
    menu_items = MenuItem.objects.all()
    total_items = menu_items.count()
    
    context = {
        'total_items': total_items,
        'menu_items': menu_items,
    }
    
    return render(request, 'myapp/home.html', context)

# Edit Menu
def menu_list(request):
    menus = MenuItem.objects.all()
    return render(request, 'myapp/menu_list.html', {'menus':menus})

def menu_create(request):
    print("Request method:", request.method)
    if request.method == 'POST':
        form = MenuItemForm(request.POST, request.FILES) #request create & upload files pictures
        if form.is_valid():
            form.save()
            return redirect('menu_list') #after save, go to menu_list page
    else:
        form = MenuItemForm()
    
    return render(request, 'myapp/menu_form.html', {'form': form})
    
def menu_update(request, pk):
    menu = get_object_or_404(MenuItem, pk=pk)
    if request.method == 'POST':
        form = MenuItemForm(request.POST, request.FILES, instance=menu)#update data, images menu
        if form.is_valid():
            form.save()
            return redirect('menu_list')
    else:
        form = MenuItemForm(instance=menu)
    return render(request, 'myapp/menu_form.html', {'form': form})

def menu_delete(request, pk):
    menu = get_object_or_404(MenuItem, pk=pk)
    if request.method == 'POST':
        menu.delete()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False}, status=400)