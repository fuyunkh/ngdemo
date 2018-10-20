import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { TaskInfo } from './TaskInfo.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private apiUrl = 'http://10.29.182.144:8088/v1/taskcenter/tasks?userAccount=zhangyong';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  public taskInfoList: TaskInfo[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }

  public getTasks() {
    this.http.post
    this.http.get(this.apiUrl, { headers: this.headers })
      .toPromise()
      .then(
        res => {
          if (res.ok) {
            const body: string = res.json();
            // let jsonObject: any = JSON.parse(body);
            // jsonObject['item']
            // let length = body['items'].length;
            body['items'].forEach(element => {
              const cnt = element['taskNum'];
              if (cnt > 0) {

                const taskList = element['taskList'];
                taskList.forEach(task => {
                  // console.log('taskid:' + task['taskId'] + '' + 'fileId:' + task['fileId']);
                  const ti: TaskInfo = new TaskInfo();
                  ti.fileId = task['fileId'];
                  ti.taskId = task['taskId'];
                  ti.flowTitle = task['flowTitle'];
                  ti.taskTitle = task['taskTitle'];
                  ti.startTime = task['startTime'];
                  this.taskInfoList.push(ti);

                });

              }

            });
            console.log(body);
          }

        }
      );

  }

}
