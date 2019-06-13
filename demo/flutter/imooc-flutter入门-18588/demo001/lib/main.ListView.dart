import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build (BuildContext context) {
    return MaterialApp(
      title: 'Imooc Flutter Demo',
      home: Scaffold(
        appBar: new AppBar(
          title: new Text('ListView Widget')
        ),
        body: new ListView(
          children: <Widget>[
            new Image.network('https://img1.mukewang.com/szimg/5ccec7ba08430b1d06000338.jpg'),
            new Image.network('https://img1.mukewang.com/szimg/5a39cd3f0001c09805400300.jpg'),
            new Image.network('https://img2.mukewang.com/szimg/5cd14db4093694ef06000338.jpg'),
            new Image.network('https://img4.mukewang.com/szimg/5c18d2d8000141c506000338.jpg'),
            new ListTile(
              leading: new Icon(Icons.border_right),
              title: new Text('border_right'),
            ),
            new ListTile(
              leading: new Icon(Icons.android),
              title: new Text('android'),
            ),
            new ListTile(
              leading: new Icon(Icons.arrow_back_ios),
              title: new Text('arrow_back_ios'),
            )
          ],
        ),
      )
    );
  }
}
