import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Post from './Post';

@Entity('comment')
export default class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  comment: string;

  @ManyToOne(() => Post, post => post.id)
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
