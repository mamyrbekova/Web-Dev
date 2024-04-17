from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    # class Meta:
    #     verbose_name = "Category"
    #     verbose_name_plural = "Categories"

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    def to_json(self):
        return {
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


    def to_json(self):
        return {
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category.to_json()
        }