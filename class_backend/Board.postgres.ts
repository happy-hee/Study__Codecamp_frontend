import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() // table임을 명시
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" }) // {type: "text"} 해당 타입이 어떤 타입인지 명시(테이블에서 쓰는 방식)
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // 삭제 여부 (혹시모를 상황을 대비해 진짜 데이터를 삭제하는 것이 아닌 테이블에 옵션으로 둔 것)
  @Column({ type: "boolean" })
  isDeleted!: boolean;
}

// 이렇게 만들고 백엔드에 Board 클래스 보고 Board 테이블 만들어줘 라고 요청을 보내야 함
