from .models import Product, Category
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.http import HttpResponse


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

def product_by_id(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(product.to_json(), safe=False)

def category_list(request):
    category = Category.objects.all()
    data = {'categories': list(category.values())}
    return JsonResponse(data)

def category_by_id(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(category.to_json(), safe=False)

def category_products(request, category_id):
    try:
        category = get_object_or_404(Category, id=category_id)
        products = category.product_set.all()
        data = {
            'category_id': category.id,
            'category_name': category.name,
            'products': list(products.values())
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


def index(request):
    return HttpResponse("Okay, project is available")