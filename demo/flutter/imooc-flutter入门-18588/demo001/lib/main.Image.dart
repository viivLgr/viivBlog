import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: 'TextWidget',
      home:Scaffold(
        appBar: AppBar(
          title:Text('TextWidget'),
        ),
        body:Center(
          child: Container(
            child: new Image.network(
              'https://img.mukewang.com/5ccff7d20001d03a16000540.jpg',
              scale: 8.0,
              fit: BoxFit.contain,
              color: Colors.greenAccent,
              colorBlendMode: BlendMode.darken,
              repeat: ImageRepeat.repeatY,
            ),
            width: 400.0,
            height: 200.0,
            color: Colors.lightBlue,
          ),
        )
      )
    );
  }
}