# Generated by Django 2.2 on 2020-06-10 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orderitem',
            options={},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={},
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='address',
            field=models.CharField(default='test', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='city',
            field=models.CharField(default='test', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='state',
            field=models.CharField(default='test', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='zipcode',
            field=models.CharField(default='test', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.FloatField(),
        ),
    ]
