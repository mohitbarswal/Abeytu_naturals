# Generated by Django 4.1.7 on 2023-03-30 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Sitedata', '0010_alter_homesection_banner_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homesection',
            name='banner_image',
            field=models.ImageField(blank=True, null=True, upload_to='banner_images/'),
        ),
        migrations.AlterField(
            model_name='homesection',
            name='best_seller_image',
            field=models.ImageField(blank=True, null=True, upload_to='seller_images/'),
        ),
        migrations.AlterField(
            model_name='homesection',
            name='collab_image',
            field=models.ImageField(blank=True, null=True, upload_to='collab_images/'),
        ),
        migrations.AlterField(
            model_name='homesection',
            name='product_image',
            field=models.ImageField(blank=True, null=True, upload_to='product_images/'),
        ),
        migrations.AlterField(
            model_name='homesection',
            name='unique_image',
            field=models.ImageField(blank=True, null=True, upload_to='unique_images/'),
        ),
    ]