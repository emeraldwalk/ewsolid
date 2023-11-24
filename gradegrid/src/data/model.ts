export interface Entity {
  id: string
}

export interface GradeBookEntity extends Entity {
  gradeBookId: string
}

export interface GradeBook extends Entity {
  name: string
}

export interface Person extends GradeBookEntity {
  first: string
  last: string
}

export interface Course extends GradeBookEntity {
  name: string
}

export interface Enrollment extends GradeBookEntity {}
