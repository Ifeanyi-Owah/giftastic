
var topics = ["dog","cat","rabbit","hamster","skunk","goldfish","bird","ferret","turtle","sugar glider","chinchilla","hedgehog","hermit crab","gerbil","pygmy goat","chicken","capybara",
            "teacup pig","serval","salamanda","frog"];
        
           
          
            function displayTopic(){
                var topic = $(this).attr("data-name");
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=XIFb7oJdusOywOJeSbTyygmieIf994gh&limit=10";
                $.ajax({
                    url:queryURL,
                    method:"GET",
                }).then(function(response){
                    console.log(response);
                    var  animalDiv = $("<div>");
                    for(var i = 0; i < response.data.length; i++){
                        var ratingP = $("<p>").text("Rating : " + response.data[i].rating)
                        animalDiv.append(ratingP);
                        var gifImg = response.data[i].images.original.url;
                        var  img = $("<img>").attr("src",gifImg);
                        img.addClass("imgClass");
                        animalDiv.append(img);
                        $("#animal-view").prepend(animalDiv);
                    }
                });

            }

            // displayTopic();

            function renderButtons(){
                $("#render-btn").empty();
                // loop through the array
                for(var i =0; i < topics.length; i++){
                    // create button
                    var b = $("<button>");
                    b.addClass("topic-btn");
                    b.attr("data-name",topics[i]);
                    b.text(topics[i]);
                    $("#render-btn").append(b);
                }
            }
            // call the render button function
            renderButtons();

           $("#add-animal").on("click",function(event){
              event.preventDefault();
              var topic = $("#animal-input").val().trim();
              topics.push(topic);
              renderButtons();
           });
           $(document).on("click", ".topic-btn", displayTopic);

            