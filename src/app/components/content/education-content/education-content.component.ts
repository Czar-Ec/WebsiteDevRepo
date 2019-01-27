import { Component, OnInit } from '@angular/core';
import { QualType, Qualification } from './qual-enums';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EducationContentComponent implements OnInit {

  qualificationTypes = [
    QualType.thirdyr,
    QualType.secondyr,
    QualType.firstyr,
    QualType.alvl2,
    QualType.alvl,
    QualType.gcse,
    QualType.btec2
  ];

  public qualList = new MatTableDataSource<Qualification>(qualifications);
  public columnsDisplayed = ['subject', 'grade'];
  public expandedElement: Qualification | null;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Filters the table data source via the
   * chosen qualification type
   * @param filterVal filter value
   */
  filter(filterVal: string) {
    this.qualList.filter = filterVal;
  }

  /**
   * Opens the project in another tab
   * @param projectUrl project url location
   */
  public openProject(projectUrl) {
    window.open(projectUrl, '_blank');
  }
}

const qualifications: Qualification[] = [
  {
    qualType: QualType.thirdyr,
    subject: 'Advanced Computing',
    description: 'Module involves the study of parallel and distributed computing, '
    + ' as well as the concept of MapReduce using Hadoop and CUDA as case studies',
    grade: 'B',
    percentage: 67,
    project_title: 'MapReduce',
    project_link: 'https://github.com/Czar-Ec/MapReduce',
    project_description: 'An attempt at reproducing Hadoop\'s MapReduce functionality'
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Computer Networking',
    description: '',
    grade: 'B',
    percentage: 64
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Data Mining',
    description: '',
    grade: 'C',
    percentage: 53
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Information Security',
    description: '',
    grade: 'A',
    percentage: 85
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Social, Legal and Ethical Aspects of Engineering',
    description: '',
    grade: 'A',
    percentage: 72
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Software Quality and Testing',
    description: '',
    grade: 'C',
    percentage: 59
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Virtual Reality',
    description: '',
    grade: 'B',
    percentage: 67
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Individual Project',
    description: '',
    grade: 'A',
    percentage: 70
  },
  {
    qualType: QualType.secondyr,
    subject: 'Essential Algorithms',
    description: '',
    grade: 'A',
    percentage: 88
  },
  {
    qualType: QualType.secondyr,
    subject: 'Java',
    description: '',
    grade: 'A',
    percentage: 76
  },
  {
    qualType: QualType.secondyr,
    subject: 'System Design and Project Management',
    description: '',
    grade: 'A',
    percentage: 75
  },
  {
    qualType: QualType.secondyr,
    subject: 'Neural Networks',
    description: '',
    grade: 'A',
    percentage: 74
  },
  {
    qualType: QualType.secondyr,
    subject: 'Computer Architecture',
    description: '',
    grade: 'C',
    percentage: 59
  },
  {
    qualType: QualType.secondyr,
    subject: 'Compilers',
    description: '',
    grade: 'C',
    percentage: 59
  },
  {
    qualType: QualType.secondyr,
    subject: 'Advanced Databases',
    description: '',
    grade: 'C',
    percentage: 55
  },
  {
    qualType: QualType.secondyr,
    subject: 'Databases',
    description: '',
    grade: 'C',
    percentage: 55
  },
  {
    qualType: QualType.secondyr,
    subject: 'Operating Systems',
    description: '',
    grade: 'C',
    percentage: 51
  },
  {
    qualType: QualType.secondyr,
    subject: 'Robotic Systems',
    description: '',
    grade: 'C',
    percentage: 50
  },
  {
    qualType: QualType.firstyr,
    subject: 'Programming',
    description: '',
    grade: 'A',
    percentage: 78
  },
  {
    qualType: QualType.firstyr,
    subject: 'Software Engineering',
    description: '',
    grade: 'A',
    percentage: 70
  },
  {
    qualType: QualType.firstyr,
    subject: 'Fundamentals and Applications of Computing',
    description: '',
    grade: 'C',
    percentage: 57
  },
  {
    qualType: QualType.firstyr,
    subject: 'IWLP Russian Level 1',
    description: '',
    grade: 'C',
    percentage: 57
  },
  {
    qualType: QualType.firstyr,
    subject: 'Codes and Code Breaking',
    description: '',
    grade: 'C',
    percentage: 50
  },
  {
    qualType: QualType.alvl2,
    subject: 'IT',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.alvl2,
    subject: 'Physics',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.alvl2,
    subject: 'Chemistry',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.alvl,
    subject: 'Computing',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.alvl,
    subject: 'Mathematics',
    description: '',
    grade: 'D'
  },
  {
    qualType: QualType.gcse,
    subject: 'ICT',
    description: 'Note: Grade is Distinction.',
    grade: 'D'
  },
  {
    qualType: QualType.gcse,
    subject: 'Mathematics',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Physics',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Chemistry',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Biology',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'Statistics',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'Geography',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'Religious Studies',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Media Studies',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'English Literature',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.gcse,
    subject: 'English Studies',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.btec2,
    subject: 'Engineering',
    description: 'Note: Grade is Merit',
    grade: 'M'
  }
];
