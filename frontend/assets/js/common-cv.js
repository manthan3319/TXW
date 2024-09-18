
$(document).ready(function() {

        jQuery.validator.addMethod("lettersonly", function(value, element) {
            return this.optional(element) || /^[a-z\s]+$/i.test(value);
        }, "Only alphabetical characters");

        jQuery.validator.addMethod("countrynum", function(value, element) {
            return iti.isValidNumber()
        }, "Your PhoneNumber Is Invalid");

        $.validator.addMethod("customemail", function(value, element) {
                return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
            },
            "Please enter a valid email address."
        );
        $(document).on("input", "#phoneNumber", function() {
            this.value = this.value.replace(/\D/g, '');
        });


        $(document).on('click', '.send_cvs', function() {
            var type = $(this).attr("data-send");
            var type_id = $(this).attr("data-send-id");
            $('#cv_type').val(type);
            $('#cv_type_id').val(type_id);
            $('.title').html('Apply for ' + type);

            $('#career_id option').each(function() {
                var optionValue = $(this).val();
                if (optionValue == type_id) {
                    $("#career_id").val(type_id).trigger("change");
                }
            });
        });

        $('#requirement_type').on('select2:select', function(e) {
            var id = $(".requirement_type option:selected").text();
            if (id == "Fresher") {
                $('#experience_1').addClass('d-none');
            } else if (id == 'Experience') {
                $('#experience_1').removeClass('d-none');
            }
        });

        $(document).on('change', '#file_upload', function() {
            readURL(this);
        });

        function readURL(input) {
            $('.file_lable').html('');
            $('.label').hide();
            $('.file_name').html(input.files[0].name);
        }

        $('#myform').validate({
            errorClass: 'text-danger error_message',
            rules: {
                fname: {
                    required: true,
                    minlength: 2,
                    maxlength: 190,
                    lettersonly: true,
                },
                lname: {
                    required: true,
                    minlength: 2,
                    maxlength: 190,
                    lettersonly: true
                },
                phoneNumber:{
                    required: true,
                    countrynum: true,
                },     
                email: {
                    required: true,
                    maxlength: 254,
                    // email: true
                    customemail: true,
                },
                career_id: {
                    required: true,
                },
                requirement_type: {
                    required: true
                },
                experience: {
                    required: true
                },
                // experience: {
                //     required: function() {
                //         // return $("input[name='requirement_type']:selected").val() == 2;
                //         return $('#experiences').is(':checked');
                //     }
                // },
                profile: {
                    required: true,
                }
            },
            errorPlacement: function(error, element) {
                // $('#phoneNumber').removeClass('error_message');
                // error.insertAfter('#' + element.attr('id') + '-error');
                $('#' + element.attr('id') + '-error').text('');
                $('#' + element.attr('id') + '-error').append(error);
            },
            submitHandler: function(form) {
                $(".button").addClass('show');
                
                var countrycode = $('.btn-cc').text();
                $('.btn-cc').append('<input type="hidden" name="countrycode" value="' + $.trim(countrycode) + '">');

                $(document).find('.submitBtnDisable').text('Send CV Now').attr('disabled',true);
                
                var loginForm = $("#myform");
                var formData = new FormData(loginForm[0]);
                var url = $("#myform").attr('action')
                    const selectedCountryData = iti.getSelectedCountryData();
                    const countryCode = selectedCountryData.dialCode;
                    formData.append('country_code', '+'+countryCode);


                $.ajax({
                    url: url,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(data) {
                        $('.submitBtnDisable').html('Send CV now').removeAttr('disabled');
                        if (data == 'success') {
                            $(".button").removeClass('show');
                            
                            $('.suc_message').show();
                            $('#myform')[0].reset();
                            $(".country_code").val('+91').trigger("change");
                            $(".career_id   ").val('').trigger("change");
                            $(".position").val('').trigger("change");
                            $(".experience").val('').trigger("change");
                            $('.file_name').text('');
                            $('.file_name').text('Upload file');
                            $('.text-danger').text('');
                            $('.suc_message').delay(1500).fadeOut(500);
                            setTimeout(function() {
                                $('#staticBackdrop').modal('hide');
                            }, 1500);
                            
                            $('.submitBtnDisable').html("Send CV Now");

                            $('.send_cvs').attr('disabled',false);
                        } else {
                            alert('something wrong');
                        }
                    },
                    error: function(data) {
                        $(".button").removeClass('show');
                        // $(".button").removeClass('disabled');
                        // $(document).find("#myform .button").attr('disabled',false);
                        $('.text-danger').text('');
                        // $('.btn_loading').attr('disabled',false);
                        $(document).find('.submitBtnDisable').text('Send CV now').removeAttr('disabled');
                        $('.send_cvs').attr('disabled',false);
                        $.each(data.responseJSON.errors, function(
                            key, value) {
                            $('[id=' + key + '-error' + ']').after(
                                '<span class="text-danger error_message">' +
                                value + '</span>')
                        });
                    }
                });
            }
        });
    });