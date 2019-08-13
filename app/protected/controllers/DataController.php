<?php

class Datacontroller extends Controller{

	public function actionRandom(){
		
		$data = array();
		$data[0] = rand(100,999);
		$data[1] = $data[0]-1;
		$data[2] = $data[0]+1;
		$data[3] = rand(100,999);
		$data[4] = rand(100,999);
		$data[5] = rand(100,999);
		$data[6] = rand(10,99);

		Yii::app()->session['data'] = json_encode($data);
		echo Yii::app()->session['data'];


	}


	public function actionLook(){
		echo Yii::app()->session['data'];
		 
	}


}