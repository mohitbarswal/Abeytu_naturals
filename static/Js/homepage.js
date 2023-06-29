// -----------------------------------------------------------------------------ADD MORE UNIQUE-----------------------------------------------------------------------------

function addmoreuniquedisp() {
  var table = $("#uniquedisp");
  var row = $("<tr>");
  var cell1 = $("<td>");
  var cell2 = $("<td>");
  var cell3 = $("<td>");
  var Heading = $("<label>").text("Unique Heading: ");
  var uniqueinput = $("<textarea>").attr({
    type: "text",
    name: "unique_heading",
    id: ""
  });
  var image = $("<label>").text("Unique Image: ");
  var imageinput = $("<input>").attr({
    type: "file",
    name: "unique_image"
  });
  var deleteBtn = $("<button>").html("x");
  deleteBtn.on("click", function () {
    row.remove();
  });

  cell1.append(Heading);
  cell1.append(uniqueinput);
  cell2.append(image);
  cell2.append(imageinput);
  cell3.append(deleteBtn);
  row.append(cell1);
  row.append(cell2);
  row.append(cell3);
  table.append(row);

  CKEDITOR.replace(uniqueinput[0]);
}

function addmoreunique() {
  var table = $("#uniqueedit");
  var row = $("<tr>");
  var cell1 = $("<td>");
  var cell2 = $("<td>");
  var cell3 = $("<td>");
  var Heading = $("<label>").text("Unique Heading: ");
  var uniqueinput = $("<textarea>").attr({
    type: "text",
    name: "unique_heading",
    id: ""
  });
  var image = $("<label>").text("Unique Image: ");
  var imageinput = $("<input>").attr({
    type: "file",
    name: "unique_image"
  });
  var deleteBtn = $("<button>").html("x");
  deleteBtn.on("click", function () {
    row.remove();
  });

  cell1.append(Heading);
  cell1.append(uniqueinput);
  cell2.append(image);
  cell2.append(imageinput);
  cell3.append(deleteBtn);
  row.append(cell1);
  row.append(cell2);
  row.append(cell3);
  table.append(row);

  CKEDITOR.replace(uniqueinput[0]);
}

// -----------------------------------------------------------------------------ADD MORE SELLER-----------------------------------------------------------------------------

function addmoresellerdisp() {
  var table = $("#sellerdisp");
  var row = $("<tr>");
  var cell1 = $("<td>");
  var cell2 = $("<td>");
  var cell3 = $("<td>");
  var cell4 = $("<td>");
  var cell5 = $("<br>");
  var sellerheading = $("<label>").text("Best Seller Heading: ");
  var sellerinput = $("<textarea>").attr({
    type: "text",
    name: "best_seller_heading",
    id: ""
  });
  var sellerimage = $("<label>").text("Best Seller Image: ");
  var sellerimageinput = $("<input>").attr({
    type: "file",
    name: "best_seller_image"
  });
  var sellerdata = $("<label>").text("Best Seller Data: ");
  var sellerdatainput = $("<textarea>").attr({
    type: "text",
    name: "best_seller_data",
    id: ""
  });
  var deleteBtn = $("<button>").html("x");
  deleteBtn.on("click", function () {
    row.remove();
  });

  cell1.append(sellerheading);
  cell1.append(sellerinput);

  cell2.append(sellerimage);
  cell2.append(sellerimageinput);

  cell3.append(sellerdata);
  cell3.append(sellerdatainput);

  cell4.append(deleteBtn);
  row.append(cell1);
  row.append(cell2);
  row.append(cell5);
  row.append(cell3);
  row.append(cell4);
  table.append(row);

  CKEDITOR.replace(sellerinput[0]);
  CKEDITOR.replace(sellerdatainput[0]);
}

function addmoreseller() {
  var table = $("#selleredit");
  var row = $("<tr>");
  var cell1 = $("<td>");
  var cell2 = $("<td>");
  var cell3 = $("<td>");
  var cell4 = $("<td>");
  var sellerheading = $("<label>").text("Best Seller Heading: ");
  var sellerinput = $("<textarea>").attr({
    type: "text",
    name: "best_seller_heading",
    id: ""
  });
  var sellerimage = $("<label>").text("Best Seller Image: ");
  var sellerimageinput = $("<input>").attr({
    type: "file",
    name: "best_seller_image"
  });
  var sellerdata = $("<label>").text("Best Seller Data: ");
  var sellerdatainput = $("<textarea>").attr({
    type: "text",
    name: "best_seller_data",
    id: ""
  });
  var deleteBtn = $("<button>").html("x");
  deleteBtn.on("click", function () {
    row.remove();
  });

  cell1.append(sellerheading);
  cell1.append(sellerinput);
  cell2.append(sellerimage);
  cell2.append(sellerimageinput);
  cell3.append(sellerdata);
  cell3.append(sellerdatainput);
  cell4.append(deleteBtn);
  row.append(cell1);
  row.append(cell2);
  row.append(cell3);
  row.append(cell4);
  table.append(row);

  CKEDITOR.replace(sellerinput[0]);
  CKEDITOR.replace(sellerdatainput[0]);
}

// -----------------------------------------------------------------------------HIDE & SHOW--------------------------------------------------------------------------

$(document).ready(function() {
  if ($(".show_hide").length == 0) {
    $("#banneredit").show();
    $("#bannerdisp").hide();

    $("#productedit").show();
    $("#productdisp").hide();
    
    $("#reviewedit").show();
    $("#reviewdisp").hide();
    
    $("#collabedit").show();
    $("#collabdisp").hide();
    
    $("#selleredit").show();
    $("#sellerdisp").hide();  

    $('#uniqueedit').show();
    $("#uniquedisp").hide();
    
  } 
  else {
    $("#banneredit").hide();
    $("#bannerdisp").show();
    
    $("#selleredit").hide();
    $("#sellerdisp").show();
    
    $("#productedit").hide();
    $("#productdisp").show();
    
    $("#reviewedit").hide();
    $("#reviewdisp").show();
    
    $("#collabedit").hide();
    $("#collabdisp").show();

    $('#uniqueedit').hide();
    $("#uniquedisp").show();

  }
});

// -----------------------------------------------------------------------------UPDATE-------------------------------------------------------------------------------

$("tbody").on("click", ".btn-edit", function(e) {
  e.preventDefault();
  $(".save_btn").addClass('new_save_btn');

  $(".imagelabel").hide();
  $(".changeimage").show();
  
  $("#banneredit").show();
  $("#bannerdisp").hide();

  $("#productedit").show();
  $("#productdisp").hide();
  
  $("#reviewedit").show();
  $("#reviewdisp").hide();
  
  $("#collabedit").show();
  $("#collabdisp").hide();

  $("#selleredit").remove();
  $("#sellerdisp").hide();  

  $("#uniqueedit").remove();
  $("#uniquedisp").hide();
  
  let id = $(this).attr("data-sid");
  $.ajax({
    url: "/edit/"+id+"/",
    method: "GET",
    success: function(data) {
        $("#homeid").val(data.id)
        CKEDITOR.instances.id_banner_heading.setData(data.banner_heading);
        $("#banner_image_id").attr("href", data.banner_image);
        $("#banner_image_id").text(imagename(data.banner_image));

        CKEDITOR.instances.id_product_heading.setData(data.product_heading);
        CKEDITOR.instances.id_product_data.setData(data.product_data);
        $("#product_image_id").attr("href", data.product_image);
        $("#product_image_id").text(imagename(data.product_image));

        CKEDITOR.instances.id_client_name.setData(data.client_name);
        CKEDITOR.instances.id_feedback_data.setData(data.feedback_data);

        CKEDITOR.instances.id_collab_heading.setData(data.collab_heading);
        $("#collab_image_id").attr("href", data.collab_image);
        $("#collab_image_id").text(imagename(data.collab_image));
        CKEDITOR.instances.id_collab_data.setData(data.collab_data);

        sellerHtml = "";
        $.each(data.All_seller, function(i, item) {
          var best_seller_heading_ID = "id_best_seller_heading_" + i;
          var best_seller_data_ID = "id_best_seller_data_" + i;
          sellerHtml += `
            <tr>
              <td>
              <input type="hidden" class="hidden_seller_cls" name="hidden_seller" data-img="${item.best_seller_image}" data-head="${item.best_seller_heading}" data-datta="${item.best_seller_data}" value="${item.id}">
                <label>
                Best Seller Heading:
                </label>
                <textarea id="${best_seller_heading_ID}" name="best_seller_heading" class="best_seller_heading_cls" >${item.best_seller_heading}</textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label> 
                  Best Seller Image:
                </label> 
                Currently: <a href="${item.best_seller_image}" class="best_seller_image_cls" id="id_best_seller_image">${item.best_seller_image}</a>
                <br>
                Change:
                <input type="file" name="best_seller_image" class="input_seller_image_cls" id="id_input_best_seller_image">
              </td>
            </tr>
            <tr>
              <td>
                <label>
                Best Seller Data:
                </label>
                <textarea id="${best_seller_data_ID}" name="best_seller_data" class="best_seller_data_cls" >${item.best_seller_data}</textarea>
              </td>
            </tr><br><br>
          `;
        });

        uniqueHtml = "";
        $.each(data.All_uniques, function(i, item) {
          var unique_heading_ID = "id_unique_heading_" + i;
          uniqueHtml += `
            <tr>
              <td>
              <input type="hidden" class="hidden_unique_cls" name="hidden_unique" data-img="${item.unique_image}" data-head="${item.unique_heading}" value="${item.id}">
                <label>
                  Unique Heading:
                </label>
                <textarea id="${unique_heading_ID}" name="unique_heading" class="unique_heading_cls" >${item.unique_heading}</textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label> 
                  Unique image:
                </label> 
                Currently: <a href="${item.unique_image}" class="unique_image_cls" id="id_unique_image">${item.unique_image}</a>
                <br>
                Change:
                <input type="file" name="unique_image" class="input_unique_image_cls" id="id_input_unique_image">
              </td>
            </tr>
          `;
        });

        $('#sellermore').append(sellerHtml);
        $.each(data.All_seller, function(i, item) {
          var best_seller_heading_ID = "id_best_seller_heading_" + i;
          CKEDITOR.replace(best_seller_heading_ID);
          var best_seller_data_ID = "id_best_seller_data_" + i;
          CKEDITOR.replace(best_seller_data_ID);
          CKEDITOR.instances[best_seller_heading_ID].setData(item.best_seller_heading);
          CKEDITOR.instances[best_seller_data_ID].setData(item.best_seller_data);
        });
        
        $('#uniquemore').append(uniqueHtml);
        $.each(data.All_uniques, function(i, item) {
          var unique_heading_ID = "id_unique_heading_" + i;
          CKEDITOR.replace(unique_heading_ID);
          CKEDITOR.instances[unique_heading_ID].setData(item.unique_heading);
        }); 
        
        
      },
  });
});

function imagename(url) {
  var parts = url.split("/");
  return parts[parts.length - 1];
}

// -----------------------------------------------------------------------------UPDATE SAVE------------------------------------------------------------------------

$(document).on("click", ".new_save_btn", function(e) {
  e.preventDefault();

  // Get form data
  let form_data = {
    home_id: $('#homeid').val(),
    banner_heading: CKEDITOR.instances.id_banner_heading.getData(),
    banner_image: $('.banner_image_cls').val(),
    best_seller_heading: CKEDITOR.instances.id_best_seller_heading.getData(),
    best_seller_image: $('.best_seller_image_cls').val(),
    best_seller_data: CKEDITOR.instances.id_best_seller_data.getData(),
    product_heading: CKEDITOR.instances.id_product_heading.getData(),
    product_data: CKEDITOR.instances.id_product_data.getData(),
    product_image: $('.product_image_cls').val(),
    client_name: CKEDITOR.instances.id_client_name.getData(),
    feedback_data: CKEDITOR.instances.id_feedback_data.getData(),
    collab_heading: CKEDITOR.instances.id_collab_heading.getData(),
    collab_data: CKEDITOR.instances.id_collab_data.getData(),
    collab_image: $('.collab_image_cls').val(),
    csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
  };

  // Get Seller Data
  let seller_updated_data = [];
  $('.hidden_seller_cls').each(function(i){
    let seller_id = $(this).val();
    let old_seller_heading = $(this).attr("data-head");
    let old_seller_image = $(this).attr("data-img");
    let old_seller_data = $(this).attr("data-datta");
    let seller_heading_ids = "id_best_seller_heading_" + i;
    let new_seller_heading = CKEDITOR.instances[seller_heading_ids].getData();
    let new_seller_image = $(this).closest('tr').next().find('.input_seller_image_cls').val();
    let seller_data_ids = "id_best_seller_data_" + i;
    let new_seller_data = CKEDITOR.instances[seller_data_ids].getData();

    let seller_obj = {
      seller_ids : seller_id,
      old_seller_heading : old_seller_heading,
      old_seller_image : old_seller_image,
      old_seller_data : old_seller_data,
      new_seller_heading : new_seller_heading,
      new_seller_image : new_seller_image,
      new_seller_data : new_seller_data,
    }
   
    seller_updated_data.push(seller_obj);

  })

  // Get unique data
  let unique_updated_data = [];
  $('.hidden_unique_cls').each(function(i) {
    let unique_id = $(this).val();
    let old_unique_heading = $(this).attr("data-head");
    let old_unique_image = $(this).attr("data-img");
    let unique_head_ids = "id_unique_heading_" + i;
    let new_unique_heading = CKEDITOR.instances[unique_head_ids].getData();
    let new_unique_image = $(this).closest('tr').next().find('.input_unique_image_cls').val();

    let unique_obj = {
      unique_ids: unique_id,
      old_unique_heading: old_unique_heading,
      old_unique_image: old_unique_image,
      new_unique_heading: new_unique_heading,
      new_unique_image: new_unique_image
    };

    unique_updated_data.push(unique_obj);
  });

  // Send data to server
  let data = new FormData();
  data.append('form_data', JSON.stringify(form_data));
  data.append('seller_updated_data', JSON.stringify(seller_updated_data));
  data.append('unique_updated_data', JSON.stringify(unique_updated_data));

  $.ajax({
    url: "",
    method: "POST",
    data: data,
    processData: false,
    contentType: false,
    success: function(response) {
      console.log(response);
      location.reload()
    }
    
  });
});



// ---------------------------------------------------------------------------DELETE---------------------------------------------------------------------------

// Best Seller
$("tbody").on("click", ".btn-sellerdel", function(){
  let id = $(this).attr("data-sid");
  csrf = $("input[name=csrfmiddlewaretoken]").val()
  mydata = {sid:id, csrfmiddlewaretoken: csrf}
  mythis = this;
  $.ajax({
    url:"/deleteseller/",
    method: "POST",
    data: mydata,
    success: function(data){
      console.log(data);
      $(mythis).closest("tr").fadeOut();
    },
  });
});

// Unique
$("tbody").on("click", ".btn-uniquedel", function(){
  let id = $(this).attr("data-sid");
  csrf = $("input[name=csrfmiddlewaretoken]").val()
  mydata = {sid:id, csrfmiddlewaretoken: csrf}
  mythis = this;
  $.ajax({
    url:"/deleteunique/",
    method: "POST",
    data: mydata,
    success: function(data){
      console.log(data);
      $(mythis).closest("tr").fadeOut();
    },
  });
});