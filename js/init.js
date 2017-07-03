$(function () {

    document.addEventListener('deviceready', function () {
        alert('Inside device ready');
        // Schedule notification for tomorrow to remember about the meeting
        cordova.plugins.notification.local.schedule({
            id: 10,
            title: "Meeting in 15 minutes!",
            text: "Jour fixe Produktionsbesprechung",
            every: "minute",
            data: {meetingId: "#123FG8"}
        });

        // Join BBM Meeting when user has clicked on the notification 
        cordova.plugins.notification.local.on("click", function (notification) {
            if (notification.id == 10) {
                //joinMeeting(notification.data.meetingId);
                alert('We are here');
            }
        });

        // Notification has reached its trigger time (Tomorrow at 8:45 AM)
        cordova.plugins.notification.local.on("trigger", function (notification) {
            if (notification.id != 10)
                return;

            // After 10 minutes update notification's title 
            setTimeout(function () {
                cordova.plugins.notification.local.update({
                    id: 10,
                    title: "Meeting in 5 minutes!"
                });
            }, 600000);
        });
    }, false);

});