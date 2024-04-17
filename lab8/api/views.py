from .models import Product, Category
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.http import HttpResponse


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False, json_dumps_params={'ensure_ascii': False, 'indent': 2})

def product_by_id(request, product_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for p in products_json:
        if p['id'] == product_id:
            return JsonResponse(p, json_dumps_params={'ensure_ascii': False, 'indent': 2})

    return JsonResponse({'error': 'Product not found'})

def category_list(request):
    category = Category.objects.all()
    data = {'categories': list(category.values())}
    return JsonResponse(data)

def category_by_id(request, category_id):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False, json_dumps_params={'ensure_ascii': False, 'indent': 2})

def category_products(request, category_id):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]

    products = Product.objects.all()
    products_json = [p.to_json() for p in products]

    selected_category = ""
    list_of_products = []
    for c in categories_json:
        if c['id'] == category_id:
            selected_category = c['name']

    for p in products_json:
        if p['category'] == selected_category:
            list_of_products.append(p)

    if len(list_of_products) != 0:
        return JsonResponse(list_of_products, safe=False, json_dumps_params={'ensure_ascii': False, 'indent': 2})

    return JsonResponse({'error': 'Category not found'})

def index(request):
    return HttpResponse("Okay, project is available")