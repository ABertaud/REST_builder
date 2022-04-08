$(document).ready(function() {
    var modelCpt = 1;
    var fieldCpt = 1;
    
    $("#remove_model").hide();
    //when the Add Field button is clicked
    $("#add_model").click(function(e) {
		modelCpt++;
		fieldCpt++;
      	$("#remove_model").fadeIn("1500");
      	//Append a new row of code to the "#itemsModel" div
      	$("#itemsModel").append(
        '<div class="form-group next-model">\
	<label class="col-md-4 control-label" for="textinput">Model Name</label>\
	<div class="col-md-3 margin-bottom">\
		<input type="model_name" class="form-control" id="modelName" placeholder="Enter the name of your model">\
	</div>\
	<div id="itemsField' + modelCpt.toString() +'">\
		<div class="form-group">\
			<label class="col-md-2 control-label" for="textinput">Field Name</label>\
			<div class="col-md-2 margin-bottom">\
				<input type="field_name" class="form-control" id="fieldName" placeholder="Enter the name of your field">\
				<select class="form-select" id="form-select1" aria-label="Default select example">\
					<option selected>AutoField</option>\
					<option value="1">BigAutoField</option>\
					<option value="2">BigIntegerField</option>\
					<option value="3">BinaryField</option>\
					<option value="4">BooleanField</option>\
					<option value="5">CharField</option>\
					<option value="6">DateField</option>\
					<option value="7">DateTimeField</option>\
					<option value="8">DecimalField</option>\
					<option value="9">DurationField</option>\
					<option value="10">EmailField</option>\
					<option value="11">FileField</option>\
					<option value="12">FilePathField</option>\
					<option value="13">FloatField</option>\
					<option value="14">ImageField</option>\
					<option value="15">IntegerField</option>\
					<option value="16">IPAddressField</option>\
					<option value="17">GenericIPAddressField</option>\
					<option value="18">NullBooleanField</option>\
					<option value="19">PositiveIntegerField</option>\
					<option value="20">PositiveSmallIntegerField</option>\
					<option value="21">SlugField</option>\
					<option value="22">SmallIntegerField</option>\
					<option value="23">TextField</option>\
					<option value="24">TimeField</option>\
					<option value="25">URLField</option>\
					<option value="26">UUIDField</option>\
					<option value="27">ForeignKey</option>\
					<option value="28">OneToOneField</option>\
					<option value="29">ManyToManyField</option>\
					<option value="30">ManyToOneField</option>\
					<option value="31">OneToManyField</option>\
				   </select>\
				   <input type="field_option" class="form-control" id="fieldOption' + fieldCpt.toString() + '" placeholder="Enter the name of your foreign key">\
			</div>\
		</div>\
	</div>\
	<div class="edit-btn">\
		<i id="add_field' + modelCpt.toString() + '" class="addField bi bi-plus-circle-fill"></i>\
		<i id="remove_field' + modelCpt.toString() + '" class="removeField bi bi-file-minus-fill"></i>\
	</div>');
		$('#fieldOption' + fieldCpt.toString()).hide(); //hide the field option
    });

    $("body").on("click", "#remove_model", function(e) {
      	$(".next-model").last().remove();
	  	modelCpt--;
    });

    $(".removeField").hide();
	$(document).on('click', '.addField', function() {
		var id = $(this).attr('id');
		id = id.substring(id.length - 1, id.length);
      	$("#remove_field" + id).fadeIn("1500");
      	//Append a new row of code to the "#items" div
      	fieldCpt += 1;
      	$("#itemsField" + id).append(
        '<div class="form-group next-field">\
<label class="col-md-2 control-label" for="textinput">Field Name</label>\
<div class="col-md-2 margin-bottom">\
    <input type="field_name" class="form-control" id="fieldName" placeholder="Enter the name of your field">\
    <select class="form-select" id="form-select' + fieldCpt + '" aria-label="Default select example">\
        <option selected>AutoField</option>\
        <option value="1">BigAutoField</option>\
        <option value="2">BigIntegerField</option>\
        <option value="3">BinaryField</option>\
        <option value="4">BooleanField</option>\
        <option value="5">CharField</option>\
        <option value="6">DateField</option>\
        <option value="7">DateTimeField</option>\
        <option value="8">DecimalField</option>\
        <option value="9">DurationField</option>\
        <option value="10">EmailField</option>\
        <option value="11">FileField</option>\
        <option value="12">FilePathField</option>\
        <option value="13">FloatField</option>\
        <option value="14">ImageField</option>\
        <option value="15">IntegerField</option>\
        <option value="16">IPAddressField</option>\
        <option value="17">GenericIPAddressField</option>\
        <option value="18">NullBooleanField</option>\
        <option value="19">PositiveIntegerField</option>\
        <option value="20">PositiveSmallIntegerField</option>\
        <option value="21">SlugField</option>\
        <option value="22">SmallIntegerField</option>\
        <option value="23">TextField</option>\
        <option value="24">TimeField</option>\
        <option value="25">URLField</option>\
        <option value="26">UUIDField</option>\
        <option value="27">ForeignKey</option>\
        <option value="28">OneToOneField</option>\
        <option value="29">ManyToManyField</option>\
        <option value="30">ManyToOneField</option>\
        <option value="31">OneToManyField</option>\
       </select>\
       <input type="field_option" class="form-control" id="fieldOption' + fieldCpt.toString() + '" placeholder="Enter the name of your foreign key">\
</div>\
</div>'
      	);
	  	$('#fieldOption' + fieldCpt.toString()).hide(); //hide the field option
	});

	$(document).on('click', ".removeField", function(e) {
		$(this).parent().parent().find(".next-field").last().remove();
	  	fieldCpt -= 1;	
    });

    $('#fieldOption' + fieldCpt.toString()).hide(); //hide the field option
	$(document).on('change', '.form-select', function() {
		//get the id of the element
		var id = $(this).attr('id'); //get the id of the element
		id = id.substring(id.length - 1); //get the last digit
        if (parseInt($(this).val()) >= 27)
            $('#fieldOption' + id).show(); 
        else
           	$('#fieldOption' + id).hide();
	});

	
	$("form").submit(function (event) {
		console.log($(this));
		// $.ajax({
		// 	async: true,
		// 	type: "POST",
		// 	url: "http://localhost:8000/buildRestApi/",
		// 	data: JSON.stringify(formDataObj),
		// 	dataType: "json",
		// 	encode: true,
		// }).done(function (data) {
		//   	console.log(data);
		// });
		event.preventDefault();
	  });
});

  