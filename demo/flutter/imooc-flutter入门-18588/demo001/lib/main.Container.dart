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
            child: new Text(
              'Hello Imooc',
              style: TextStyle(fontSize: 40.0)
            ),
            alignment: Alignment.topLeft,
            width: 500.0,
            height: 400.0,
            // color: Colors.lightBlue,
            decoration: new BoxDecoration(
              gradient: const LinearGradient(
                colors: [
                  Colors.lightBlue,
                  Colors.lightGreen,
                  Colors.purple
                ]
              )
            ),
            padding: const EdgeInsets.fromLTRB(20.0, 50.0, 20.0, 30.0),
            margin: const EdgeInsets.all(10.0),
          ),
        )
      )
    );
  }
}