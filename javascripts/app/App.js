var events = [];
$("input.submit").click(function() {
	var taskName = $("input[name='taskname']").val();
	var dueDate = $("input[name='duedate']").val();
	var eventObj = {
		title: taskName,
		start: dueDate
	};
	events.push(eventObj);
	renderCalendar(events);
});

function renderCalendar(events) {
	$('.calendar').fullCalendar({
		events: events
        // put your options and callbacks here
	});
}