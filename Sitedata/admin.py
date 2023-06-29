# from django.contrib import admin
# from .models import Homesection, Addunique, Bestseller

# class AdduniqueInline(admin.TabularInline):
#     model = Addunique

# class BestsellerInline(admin.TabularInline):
#     model = Bestseller

# class HomesectionAdmin(admin.ModelAdmin):
#     inlines = [
#         AdduniqueInline,
#         BestsellerInline,
#     ]

# admin.site.register(Homesection, HomesectionAdmin)
# admin.site.register(Addunique)
# admin.site.register(Bestseller)


from django.contrib import admin
from .models import Homesection, Addunique, Bestseller

@admin.register(Homesection)
class HomesectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'banner_heading', 'product_heading', 'client_name', 'collab_heading')

@admin.register(Addunique)
class AdduniqueAdmin(admin.ModelAdmin):
    list_display = ('id', 'homesection', 'unique_heading', 'unique_image')

@admin.register(Bestseller)
class BestsellerAdmin(admin.ModelAdmin):
    list_display = ('id', 'homesection', 'best_seller_heading', 'best_seller_image')
