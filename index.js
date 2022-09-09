<script src="http://mcapi.org/scripts/minecraft.js"></script>
    <div class="server-status">
      Il server <span class="server-online"></span>!
    </div>
    <script>
      MinecraftAPI.getServerStatus('pixelcord.hopto.org', {
        port: 25565 // optional, only if you need a custom port
      }, function (err, status) {
        if (err) {
          return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('.server-online').innerHTML = status.online ? 'up' : 'down';
      });
    </script>
