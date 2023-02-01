class StudentList
      {
        // constructor for the student object
        constructor(rootid, students)
        {
          this.rootid = rootid;
          this.studentList = students;
          this.refresh();
        }
        // Create the div for the list element for the student details
        studentItemString(number, studentID, firstName, lastName, qualification)
        {
          return `<div class="row">${number}. ${studentID} | ${firstName} ${lastName} | "${qualification}"</div>`
        }
        // create the object to be put into the HTML
        studentListString(students)
        {
          let html = ``;
          for(let i = 0; i < students.length; i++)
          {
            let student = students[i]
            html += this.studentItemString(i+1, student.studentID, student.firstName, student.lastName, student.qualification)
          }
          return html;
        }
        // Refresh the whole list of Students
        refresh()
        {
          let elementString = this.studentListString(this.studentList);
          let rootElement = document.getElementById(this.rootid);
          rootElement.innerHTML = elementString;
        }
        // add a student to the list
        add(studentID, firstName, lastName, qualification)
        {
          this.studentList.push({studentID: studentID, firstName: firstName, lastName: lastName, qualification: qualification})
          this.refresh();
        }
        // search for a specific student id
        search(idString)
        {
          let shortList = [];
          for(let student of this.studentList)
          {
            if (student.studentID.includes(idString))
            {
              shortList.push(student);
            }
          }
          let elementString = this.studentListString(shortList);
          let rootElement = document.getElementById(this.rootid);
          rootElement.innerHTML = elementString;
        }
        // sort the student list by student id
        sortID()
        {
          this.studentList.sort(function (a,b) {
            return a.studentID.localeCompare(b.studentID);
          })
          this.refresh();
        }
      }