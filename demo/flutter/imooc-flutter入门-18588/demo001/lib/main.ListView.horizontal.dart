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
        body: Center(
          child: Container(
            height: 200.0,
            child: MyList(),
          )
        ),
      )
    );
  }
}

class MyList extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      children: <Widget>[
        new Container(
          width: 180.0,
          color: Colors.lightBlue
        ),
        new Container(
          width: 180.0,
          color: Colors.amber
        ),
        new Container(
          width: 180.0,
          color: Colors.deepOrangeAccent
        ),
        new Container(
          width: 180.0,
          color: Colors.deepPurpleAccent
        ),
        new Container(
          width: 180.0,
          color: Colors.lightGreen
        )
      ]
    );
  }
}