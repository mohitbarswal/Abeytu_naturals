# Generated by Django 4.2 on 2023-04-11 11:36

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Sitedata', '0024_alter_addunique_homesection'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homesection',
            name='product_heading',
            field=ckeditor.fields.RichTextField(default='product'),
        ),
    ]
