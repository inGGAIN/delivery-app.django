from django.shortcuts import render

from .models import MenuItem

def home(request):
    menu_items = MenuItem.objects.all()
    context = {}
    return render(request, 'deliver/home.html', context)

# def menu_view(request):
#     menu_items = [
#         {
#             'name': 'Resoll',
#             'categories': 'Menu Pembuka',
#             'description': 'Nikmati hidangan pembuka terbaik yang akan menggugah selera Anda.',
#             'image': 'deliver/images/products/resoll.jpg',
#             'price': 2000,
#         },
#         {
#             'name': 'Nasi Goreng',
#             'categories': 'Menu Utama',
#             'description': 'Pilihan menu utama dengan cita rasa yang tak terlupakan.',
#             'price': 15000,
#             'image': 'deliver/images/products/fried-rice.jpg',
#         },
#         {
#             'name': 'Pancake',
#             'categories': 'Menu Penutup',
#             'description': 'Akhiri hidangan Anda dengan menu penutup manis dari kami.',
#             'price': 10000,
#             'image': 'deliver/images/products/dessert.jpeg',
#         },
#         {
#             'name': 'Salad',
#             'categories': 'vegetarian',
#             'description': 'Salad segar dan sehat untuk Anda yang peduli dengan gaya hidup sehat.',
#             'price': 5000,
#             'image': 'deliver/images/products/salad.jpg',
#         },
#         {
#             'name': 'Mojito',
#             'categories': 'Minuman',
#             'description': 'Pilihan minuman segar untuk melengkapi hidangan Anda.',
#             'price': 5000,
#             'image': 'deliver/images/products/mojito.jpg',
#         },
#         {
#             'name': 'Pecel',
#             'categories': 'vegetarian',
#             'description': 'Rasakan pecel dengan saus yang kaya rasa dan sempurna.',
#             'price': 10000,
#             'image': 'deliver/images/products/pecel.jpg',
#         },
#     ]
def menu_view(request):
    # Mengambil semua data dari model MenuItem yang ada di database
    menu_items = MenuItem.objects.all()
    total_items = menu_items.count()
    
    context = {
        'total_items': total_items,
        'menu_items': menu_items,
    }
    
    return render(request, 'deliver/home.html', context)
