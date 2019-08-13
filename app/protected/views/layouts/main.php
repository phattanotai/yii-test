<html  lang="en" ng-app="myApp">
	<head>
		<title> ระบบสุ่มของรางวัลในงานนิทรรศการ</title>
		<meta http-equiv=Content-Type content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<script type="text/javascript" src="js/angular.min.js"></script>
		<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
	</head>
	<body ng-controller="mianController" >
		<div>
			<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			  <form class="form-inline">
			    <input class="form-control mr-sm-2" type="text" placeholder="Search" id="sc" >
			    <button class="btn btn-success" ng-click="look()">ตรวจรางวัล</button>
			    <button style="margin-left: 3px;" class="btn btn-primary" ng-click="random()">ดำเนินการสุ่มรางวัล</button>
			  </form>
			</nav>
		</div>
		<div id="container"  >
			<div class="card " style="width: 80%;margin:auto;margin-top: 20px;margin-bottom: 20px;background-color: #eee;">
				<div class="card-body" >
					<div class="card-title" style="text-align: center;">
						<h2>ผลการสุ่มจับสลากรางวัล</h2>
						<table class="table table-borderless" style="text-align: center;">
							<thead>
								<tr>
									<td><h3>รางวัลที่ 1 </h3></td>
								</tr>
							</thead>
							<tbody>
								<td><h4>{{data[0]}}</h4></td>
							</tbody>
						</table>

						<table class="table table-borderless" style="text-align: center;">
							<thead>
								<tr>
									<td colspan="3"><h3>รางวัลที่ 2 </h3></td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><h4>{{data[3]}}</h4></td>
									<td><h4>{{data[4]}}</h4></td>
									<td><h4>{{data[5]}}</h4></td>
								</tr>
							</tbody>
						</table>

						<table class="table table-borderless" style="text-align: center;">
							<thead>
								<tr>
									<td colspan="2"><h3>รางวัลเลขข้างเคียงรางวัลที่ 1</h3></td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><h4>{{data[1]}}</h4></td>
									<td><h4>{{data[2]}}</h4></td>
								</tr>
							</tbody>
						</table>

						<table class="table table-borderless" style="text-align: center;">
							<thead>
								<tr>
									<td ><h3>รางวัลเลขท้าย 2 ตัว  </h3></td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><h4>{{data[6]}}</h4></td>
								</tr>
							</tbody>
						</table>
					</div>
					
				</div>
			</div>
			
		</div>
	</body>
