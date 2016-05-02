(function(){
    var todoApp = angular.module('todoApp', []);
    todoApp.controller('todoController', function() {
        var self = this;
        self.tasks = [];
        self.addTask = function addTask() {
            var data = {
                name: self.newTask,
                isCompleted: false
            };
            self.tasks.push(data);
            self.newTask = '';

        };

        self.removeTask = function removeTask(task) {
            self.tasks = self.tasks.filter(function(item) {
                return item != task;
            });
        };

        self.remainCount = function remainCount() {
            var count = 0;
            angular.forEach(self.tasks, function(task) {
                count += task.isCompleted ? 0 : 1;
            });
            return count;
        };

        self.editContent = function editContent() {
            event.target.contentEditable = (event.target.contentEditable == 'true') ? 'false' : 'true';
        };

        self.editOnEnter = function editOnEnter(task) {
            if (event.keyCode == 13 && task.name) {
                self.editContent();
            }
            /*return (event.keyCode == 13 && task.name) ? self.editContent() : '';*/
        };

        self.saveOnBlur = function saveOnBlur() {
            event.target.contentEditable = 'false';
        };

    });

})();

// IIFE immedietly invoked function expression 
(function(){

})();

