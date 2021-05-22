<?php

require 'base64'

post '/base64' do
    File.open('imageBase64.png', 'wb') do|f|
        f.write(Base64.decode64(params['image']))
    end
    "OK"
end

?>
