from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    context = {}
    return render(request, 'deliver/home.html', context)

def menu_view(request):
    menu_items = [
        {
            'name': 'Menu Pembuka',
            'description': 'Nikmati hidangan pembuka terbaik yang akan menggugah selera Anda.',
            'image': 'deliver/images/products/resoll.jpg',
        },
        {
            'name': 'Menu Utama',
            'description': 'Pilihan menu utama dengan cita rasa yang tak terlupakan.',
            'image': 'deliver/images/products/fried-rice.jpg',
        },
        {
            'name': 'Menu Penutup',
            'description': 'Akhiri hidangan Anda dengan menu penutup manis dari kami.',
            'image': 'deliver/images/products/dessert.jpeg',
        },
        {
            'name': 'Salad Sehat',
            'description': 'Salad segar dan sehat untuk Anda yang peduli dengan gaya hidup sehat.',
            'image': 'deliver/images/products/salad.jpg',
        },
        {
            'name': 'Minuman Segar',
            'description': 'Pilihan minuman segar untuk melengkapi hidangan Anda.',
            'image': 'deliver/images/products/mojito.jpg',
        },
        {
            'name': 'Pecel',
            'description': 'Rasakan pecel dengan saus yang kaya rasa dan sempurna.',
            'image': 'deliver/images/products/pecel.jpg',
        },
    ]
    
    return render(request, 'deliver/home.html', {'menu_items': menu_items})

