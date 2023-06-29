from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from Sitedata.models import Homesection, Bestseller, Addunique
from .forms import HomepageForm,  Bestsellerform, Adduniqueform
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
import json

#--------------------------------------------------------------------------- Display------------------------------------------------------------------

def homefun(request):
    return render(request, 'Home.html')

def aboutfun(request):
    return render(request, 'About.html')

#--------------------------------------------------------------------------Save-----------------------------------------------------------------------

@csrf_exempt
def save_homepage(request):
    if request.method == "POST":
        homepage_form = HomepageForm(request.POST, request.FILES)
        bestseller_form = Bestsellerform(request.POST, request.FILES)
        addunique_form = Adduniqueform(request.POST, request.FILES)
        if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':

            form_data = request.POST.get('form_data')
            form_data_dict = json.loads(form_data)
            
            hid = form_data_dict['home_id']
            banner_heading = form_data_dict['banner_heading']
            banner_image = form_data_dict['banner_image'].replace("C:\\fakepath\\","images/")
            product_heading = form_data_dict['product_heading']
            product_data = form_data_dict['product_data']
            product_image = form_data_dict['product_image'].replace("C:\\fakepath\\","images/")
            client_name = form_data_dict['client_name']
            feedback_data = form_data_dict['feedback_data']
            collab_heading = form_data_dict['collab_heading']
            collab_data = form_data_dict['collab_data']
            collab_image = form_data_dict['collab_image'].replace("C:\\fakepath\\","images/")
            
            if banner_image == "":
                banner_imageIn = Homesection.objects.get(id = hid).banner_image
            else:
                banner_imageIn = banner_image

            if product_image == "":
                product_imageIn = Homesection.objects.get(id = hid).product_image
            else:
                product_imageIn = product_image
                
            if collab_image == "":
                collab_imageIn = Homesection.objects.get(id = hid).collab_image
            else:
                collab_imageIn = collab_image

            homepage_form=Homesection(id=hid,
            banner_heading=banner_heading,
            banner_image=banner_imageIn,
            product_heading=product_heading,
            product_data=product_data,
            product_image=product_imageIn,
            client_name=client_name,
            feedback_data=feedback_data,
            collab_heading=collab_heading,
            collab_image=collab_imageIn,
            collab_data=collab_data)
            homepage_form.save()
            
            seller_updated_data = request.POST.get('seller_updated_data')
            seller_updated_dict = json.loads(seller_updated_data)
            
            for item in seller_updated_dict:
                obj = Bestseller.objects.get(id=item['seller_ids'])
                obj.best_seller_heading = item['new_seller_heading']
                if item['new_seller_image'] == "":
                    obj.best_seller_image = item['old_seller_image'].replace("media/","")
                else:
                    obj.best_seller_image = item['new_seller_image'].replace("C:\\fakepath\\","images/")
                obj.best_seller_data = item['new_seller_data']
                obj.save()
            
            unique_updated_data = request.POST.get('unique_updated_data')
            unique_updated_dict = json.loads(unique_updated_data)
            
            for item in unique_updated_dict:
                obj = Addunique.objects.get(id=item['unique_ids'])
                obj.unique_heading = item['new_unique_heading']
                if item['new_unique_image'] == "":
                    obj.unique_image = item['old_unique_image'].replace("media/","")
                else:
                    obj.unique_image = item['new_unique_image'].replace("C:\\fakepath\\","images/")
                obj.save()
            
            
            
            return JsonResponse({'success': True})
        else:
            if homepage_form.is_valid() and bestseller_form.is_valid() and addunique_form.is_valid():
                
                if Homesection.objects.exists():
                    homepage_form.save(commit=False)
                else:
                    homepage_form.save()
                homeID = Homesection.objects.latest('id').id
                
                bestseller_form.save(commit=False)
                best_seller_heading = request.POST.getlist('best_seller_heading')
                best_seller_image = request.FILES.getlist('best_seller_image')
                best_seller_data = request.POST.getlist('best_seller_data')
                for i in range(min(len(best_seller_heading), len(best_seller_image), len(best_seller_data))):
                    Bestseller.objects.create(homesection_id=homeID, best_seller_heading=best_seller_heading[i], best_seller_image=best_seller_image[i], best_seller_data=best_seller_data[i])
                    
                addunique_form.save(commit=False)
                unique_headings = request.POST.getlist('unique_heading')
                unique_images = request.FILES.getlist('unique_image')
                for i in range(min(len(unique_headings), len(unique_images))):
                    Addunique.objects.create(homesection_id=homeID, unique_heading=unique_headings[i], unique_image=unique_images[i])
                messages.success(request, 'Data saved successfully!')
                return HttpResponseRedirect(redirect_to='/homepage/')
    else:
        homepage_form = HomepageForm()
        addunique_form = Adduniqueform()
        bestseller_form = Bestsellerform()
    alldata = Homesection.objects.all()
        
    return render(request, 'Homepage.html', {'homepage_form': homepage_form, 'addunique_form':addunique_form, 'bestseller_form':bestseller_form, 'alldata': alldata})


#--------------------------------------------------------------------------EDIT---------------------------------------------------------------------


def edit_homepage(request,id):
    obj = Homesection.objects.get(pk=id)
    obj2 = obj.home_bestseller_key.all()
    obj3 = obj.home_unique_key.all()
    
    All_seller = []
    for i in obj2:
        All_seller.append({
            "id": i.id,
            "best_seller_heading": i.best_seller_heading,
            "best_seller_image": i.best_seller_image.url if i.best_seller_image else "",
            "best_seller_data": i.best_seller_data,
        })
    
    All_uniques = []
    for i in obj3:
        All_uniques.append({
            "id": i.id,
            "unique_heading": i.unique_heading,
            "unique_image": i.unique_image.url if i.unique_image else "",
        })
    
    obj_data = {
        "id": obj.id,
        "banner_heading": obj.banner_heading, 
        "banner_image": obj.banner_image.url if obj.banner_image else "",
        "product_heading": obj.product_heading,
        "product_data": obj.product_data,
        "product_image": obj.product_image.url if obj.product_image else "",
        "client_name": obj.client_name,
        "feedback_data": obj.feedback_data,
        "collab_heading": obj.collab_heading,
        "collab_image": obj.collab_image.url if obj.collab_image else "",
        "collab_data": obj.collab_data,
        "All_seller": All_seller,
        "All_uniques": All_uniques,
    }
    for i in ["banner_image", "product_image", "collab_image"]:
        if obj_data[i]:
            obj_data[i] = request.build_absolute_uri(obj_data[i]).replace('http://127.0.0.1:8000', '')

    return JsonResponse(obj_data)

#--------------------------------------------------------------------------Delete---------------------------------------------------------------------


def delete_seller(request):
    if request.method == "POST":
        id = request.POST.get('sid')
        delt = Bestseller.objects.get(pk=id)
        delt.delete()
        return JsonResponse({'status': 'Deleted'})
    else:
        return JsonResponse({'status': 'Not Deleted'})
    
def delete_unique(request):
    if request.method == "POST":
        id = request.POST.get('sid')
        delt = Addunique.objects.get(pk=id)
        delt.delete()
        return JsonResponse({'status': 'Deleted'})
    else:
        return JsonResponse({'status': 'Not Deleted'})