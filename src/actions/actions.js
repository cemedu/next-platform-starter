import AccessTokenAction from "./access.token.action"
import AdminAction from "./admin.action"
import AnswerAction from "./answers.action"
import BlogAction from "./blogs.action"
import CommentAction from "./comment.action"
import CoursesAction from "./cources.action"
import MessageAction from "./messages.action"
import NotificationAction from "./notifications.action"
import PaymentAction from "./payments.action"
import PricingAction from "./pricing.action"
import ProjectAction from "./projects.action"
import QuestionAction from "./questions.action"
import RatingAction from "./rating.action"
import SecurityAction from "./security.action"
import UserAction from "./user.action"

const Actions = {
    Admin: AdminAction,
    Answer: AnswerAction,
    Blog: BlogAction,
    Comment: CommentAction,
    Course: CoursesAction,
    Message: MessageAction,
    Notification: NotificationAction,
    Payment: PaymentAction,
    Project: ProjectAction,
    Question: QuestionAction,
    User: UserAction,
    Security: SecurityAction,
    AccessToken: AccessTokenAction,
    Rating: RatingAction,
    Pricing: PricingAction,
};

export default Actions;