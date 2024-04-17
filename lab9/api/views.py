
from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)



def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json(), safe=False)


# def get_company_by_vacancy(request, company_id):
#     c = Company.objects.get(pk=company_id)
#     vacancies = Vacancy.objects.filter(company=c)
#     vacancies_json = [vacancy.to_json() for vacancy in vacancies]
#     return JsonResponse(vacancies_json, safe=False)

def get_company_by_vacancy(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        json = [
            {
                "id": v.id,
                "name": v.name,
                "description": v.description,
                "salary": v.salary,
                "company": v.company.id,
            }
            for v in vacancies
        ]
        return JsonResponse(json, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)


def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, id):
    try:
        v = Vacancy.objects.get(id=id)
        json = {
            "id": v.id,
            "name": v.name,
            "description": v.description,
            "salary": v.salary,
            "company": v.company.id,
        }
        return JsonResponse(json, safe=False)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"}, status=404)


def vacancy_top_ten(request):
    if request.method == 'GET':
        vacancy_top_ten = Vacancy.objects.all().order_by('-salary')[:10]
        vacancy_top_ten_json = [v.to_json() for v in vacancy_top_ten]
        return JsonResponse(vacancy_top_ten_json, safe=False)
