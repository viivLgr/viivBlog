import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '电影海报实例',
      home: Scaffold(
        appBar: AppBar(
          title: Text('电影海报实例')
        ),
        body: GridView(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 2.0,
            crossAxisSpacing: 2.0,
            childAspectRatio: 0.7,
          ),
          children: <Widget>[
            new Image.network('https://img1.mukewang.com/szimg/5ccec7ba08430b1d06000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5a39cd3f0001c09805400300.jpg', fit: BoxFit.cover),
            new Image.network('https://img2.mukewang.com/szimg/5cd14db4093694ef06000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c18d2d8000141c506000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5cb9976e08f6b07206000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5c7e6835087ef3d806000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c18d2d8000141c506000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5cb9976e08f6b07206000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5c7e6835087ef3d806000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img2.mukewang.com/5cb0320d084566ed06000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c18d2d8000141c506000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5cb9976e08f6b07206000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5c7e6835087ef3d806000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img2.mukewang.com/5cb0320d084566ed06000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/5cce8be1088dd62806000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5cc657ee086fc3e706000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5c7e6835087ef3d806000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img2.mukewang.com/5cb0320d084566ed06000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/Í5cce8be1088dd62806000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5cc657ee086fc3e706000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c60ed0008c8ddcc06000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img3.mukewang.com/5c18cf540001ac8206000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img2.mukewang.com/szimg/5c8f014a0904310b02700148.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c9a0db9088d218306000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c60ed0008c8ddcc06000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img3.mukewang.com/5c18cf540001ac8206000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img2.mukewang.com/szimg/5c8f014a0904310b02700148.jpg', fit: BoxFit.cover),
            new Image.network('https://img4.mukewang.com/szimg/5c9a0db9088d218306000338.jpg', fit: BoxFit.cover),
            new Image.network('https://img.mukewang.com/5be8f5a40001482306000338-240-135.jpg', fit: BoxFit.cover),
            new Image.network('https://img1.mukewang.com/szimg/5a39cd3f0001c09805400300.jpg', fit: BoxFit.cover),
          ],
        )
      )
    );
  }
}