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
        body: GridView.count(
          padding: const EdgeInsets.all(10.0),
          crossAxisSpacing: 10.0,
          crossAxisCount: 3,
          children: <Widget>[
            const Text('I love imooc1'),
            const Text('I love imooc'),
            const Text('I love imooc'),
            const Text('I love imooc'),
            const Text('I love imooc'),
            const Text('I love imooc')
          ],
        )
      )
    );
  }
}