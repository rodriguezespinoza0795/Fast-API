$(document).ready(function () {

    $("#card_calls").click(function () {
        fetch("http://127.0.0.1:8000/")
        .then(response => response.json())
        .then((data) => {console.log(data)})
    });

    $("#card_login").click(function () {
        console.log("card_login");
    });

    $("#card_rta").click(function () {
        console.log("card_rta");
    });

	// 	function copyToClipboard(element) {
	// 		var $temp = $("<input>");
	// 		$("body").append($temp);
	// 		$temp.val($(element).text()).select();
	// 		document.execCommand("copy");
	// 		$temp.remove();
	// 	}
	// 	$('.copiable').on('click', function () {
	// 		var $elem = $(this);
	// 		copyToClipboard($elem);
	// 	});

	// 	function set_data(data_value, type_data_value) {
	// 		$.ajax({
	// 			type: "POST",
	// 			url: 'functions_cms.php',
	// 			data: ({ action: 'send_data', data: data_value, type_data: type_data_value }),
	// 			cache: false,
	// 			beforeSend: function () {
	// 				var currentdate = new Date();
	// 				var datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	// 				$("#last_start_time").text(datetime);
	// 				$("#last_end_time").text("");
	// 			},
	// 			success: function (data) {
	// 				console.log('Exitoso');
	// 				var currentdate = new Date();
	// 				var datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	// 				$("#last_end_time").text(datetime);
	// 			},
	// 			error: function (html) {
	// 				console.log('Exitoso');
	// 			}
	// 		});

	// 	}


	// 	function rta(data) {
	// 		var agents_list = new Array();
	// 		var agent = new Object();
	// 		var results = data.split("\n");
	// 		var results_length = results.length;

	// 		for (i = 1; i < (results_length - 1); i++) {
	// 			var agent_results = results[i].split(";");
	// 			agent.login = agent_results[2];
	// 			agent.extension = agent_results[3];
	// 			agent.status = agent_results[5];
	// 			agent.time = agent_results[7];
	// 			agent.timeNow = newTime();
	// 			agents_list.push(agent);
	// 			agent = new Object();
	// 		}

	// 		var json_data = JSON.stringify(agents_list);
	// 		set_data(json_data, 1);

	// 	}

	// 	function call_handling(data) {
	// 		var agents_metrics_list = new Array();
	// 		var agent_metrics = new Object();

	// 		var results = data.split("\n");
	// 		var results_length = results.length;
	// 		var date = newDate();

	// 		for (i = 4; i < (results_length - 1); i++) {
	// 			var agent_metrics_results = results[i].split(";");

	// 			agent_metrics.date_value = date;
	// 			agent_metrics.login = agent_metrics_results[1];
	// 			agent_metrics.staffed = agent_metrics_results[2];
	// 			agent_metrics.acd = agent_metrics_results[3];
	// 			agent_metrics.aht = agent_metrics_results[4];
	// 			agent_metrics.att = agent_metrics_results[5];
	// 			agent_metrics.acw = agent_metrics_results[6];
	// 			agent_metrics.hold = agent_metrics_results[7];
	// 			agent_metrics.trans = agent_metrics_results[8];
	// 			agents_metrics_list.push(agent_metrics);
	// 			agent_metrics = new Object();
	// 		}

	// 		var json_data = JSON.stringify(agents_metrics_list);
	// 		set_data(json_data, 3);
	// 	}

	// 	function login_logout(data) {
	// 		var punches_list = new Array();
	// 		var punch = new Object();

	// 		var results = data.split("\n");
	// 		var results_length = results.length;
	// 		var count = 0;
	// 		for (i = 3; i < (results_length - 1); i++) {
	// 			var punch_results = results[i].split(";");
	// 			punch.login = punch_results[1];
	// 			var time_s = convert_to_time(punch_results[4]);
	// 			if (punch_results[7] !== "") {
	// 				var date_e = convert_to_date(punch_results[7]);
	// 				var date_s = convert_to_date(punch_results[7]);
	// 				var time_e = convert_to_time(punch_results[6]);
	// 				var dt_e = date_e + " " + time_e;
	// 			} else {
	// 				var date_s = newDate();
	// 				var dt_e = "";
	// 			}
	// 			var dt_s = date_s + " " + time_s;
	// 			punch.date_start = dt_s;
	// 			punch.date_end = dt_e;

	// 			punches_list.push(punch);
	// 			punch = new Object();
	// 			count++;
	// 			console.log(count);
	// 		}
	// 		var json_data = JSON.stringify(punches_list);
	// 		set_data(json_data, 5);
	// 	}

	// 	function convert_to_time(time) {
	// 		var time_value;

	// 		var time_results = time.split(" ");
	// 		var hour_value = time_results[0];
	// 		var time_set = time_results[1];

	// 		var hour_results = hour_value.split(":");
	// 		var hour = hour_results[0];
	// 		var minute = hour_results[1];

	// 		if ((time_set[0] == "P") && parseInt(hour) < 12) {
	// 			hour = parseInt(hour) + 12;
	// 		}
	// 		if (parseInt(hour) < 10) {
	// 			hour = "0" + hour;
	// 		}

	// 		time_value = hour + ":" + minute + ":" + "00";
	// 		return time_value;
	// 	}
	// 	function convert_to_date(date) {
	// 		var date_value;

	// 		var date_results = date.split("/");
	// 		var year = date_results[2];
	// 		var year_value = year.substring(0, 4);
	// 		var month = date_results[0];
	// 		var day = date_results[1];

	// 		if (parseInt(month) < 10) {
	// 			month = '0' + month;
	// 		}
	// 		if (parseInt(day) < 10) {
	// 			day = '0' + day;
	// 		}

	// 		date_value = year_value + "-" + month + "-" + day;

	// 		return date_value;
	// 	}


	// 	function newTime() {
	// 		var dt = new Date();
	// 		var current_date = dt.getHours() + ":" + dt.getMinutes() + ":00";
	// 		return current_date;
	// 	}

	// 	function newDate() {
	// 		var dt = new Date();
	// 		var current_date = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
	// 		return current_date;
	// 	}

	// 	function cms_import(report_cms) {

	// 		switch (report_cms) {
	// 			case 1:
	// 				$.ajax({
	// 					url: "rta_file.txt",
	// 					dataType: "text",
	// 					cache: false,
	// 					success: function (data) { rta(data); }
	// 				});
	// 				break;
	// 			case 3:
	// 				$.ajax({
	// 					url: "calls_file.txt",
	// 					dataType: "text",
	// 					cache: false,
	// 					success: function (data) { call_handling(data); }
	// 				});
	// 				break;
	// 			case 4:
	// 				$.ajax({
	// 					url: "login_logout.txt",
	// 					dataType: "text",
	// 					cache: false,
	// 					success: function (data) { login_logout(data); }
	// 				});
	// 				break;
	// 			default: break;
	// 		}

	// 	}

	// 	function realtime_report() {
	// 		var currentdate = new Date();
	// 		var datetime = currentdate.getHours() + ":"
	// 			+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
	// 		$("#last_run_time").text(datetime);
	// 		$("#card_calls").trigger('click');
	// 		$("#card_login").trigger('click');
	// 	}
	// 	realtime_report();

});