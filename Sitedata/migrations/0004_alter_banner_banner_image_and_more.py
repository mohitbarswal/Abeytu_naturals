# Generated by Django 4.1.7 on 2023-03-28 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Sitedata', '0003_alter_banner_banner_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banner',
            name='banner_image',
            field=models.ImageField(blank=True, null=True, upload_to='media/banner_images'),
        ),
        migrations.AlterField(
            model_name='collaboration',
            name='collab_image',
            field=models.ImageField(upload_to='images/collab_images'),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image',
            field=models.ImageField(upload_to='images/product_images'),
        ),
        migrations.AlterField(
            model_name='unique',
            name='unique_image',
            field=models.ImageField(upload_to='images/unique_images'),
        ),
        migrations.AlterField(
            model_name='variants',
            name='variant_image',
            field=models.ImageField(upload_to='images/variants_images'),
        ),
    ]
