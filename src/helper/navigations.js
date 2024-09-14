import Icons from "@/library/icons";
import NavLink from "@/library/urls";

const user_navigation = [
    { url: NavLink.user.dashboard || '/', icon: Icons.Dashboard, name: 'Dashboard' },
    { url: NavLink.user.profile || '/', icon: Icons.User, name: 'Profile' },
    { url: NavLink.user.answers || '/', icon: Icons.Details, name: 'Answers' },
    { url: NavLink.user.courses || '/', icon: Icons.Courses, name: 'Courses' },
    { url: NavLink.user.projects || '/', icon: Icons.Project, name: 'Projects' },
    { url: NavLink.user.messages || '/', icon: Icons.Message, name: 'Messages' },
    { url: NavLink.user.payments || '/', icon: Icons.Payment, name: 'Payments' },
    { url: NavLink.user.notifications || '/', icon: Icons.Notification, name: 'Notification' },
]

const admin_navigation = [
    { url: NavLink.admin.dashboard || '/', icon: Icons.Dashboard, name: 'Dashboard' },
    { url: NavLink.admin.profile || '/', icon: Icons.User, name: 'Profile' },
    { url: NavLink.admin.notifications || '/', icon: Icons.Notification, name: 'Notification' },
    { url: NavLink.admin.blogs || '/', icon: Icons.Blogs, name: 'Blogs' },
    { url: NavLink.admin.messages || '/', icon: Icons.Message, name: 'Messages' },
    { url: NavLink.admin.ratings || '/', icon: Icons.Message, name: 'Ratings' },
    { url: NavLink.admin.courses || '/', icon: Icons.Courses, name: 'Courses' },
    { url: NavLink.admin.projects || '/', icon: Icons.Project, name: 'Projects' },
    { url: NavLink.admin.pricing || '/', icon: Icons.Rupees, name: 'Pricing' },
    { url: NavLink.admin.users || '/', icon: Icons.UserPlus, name: 'Users' },
    { url: NavLink.admin.questions || '/', icon: Icons.Faq, name: 'Questions' },
    { url: NavLink.admin.answers || '/', icon: Icons.Details, name: 'Answers' },
    { url: NavLink.admin.comments || '/', icon: Icons.Comment, name: 'Comments' },
    { url: NavLink.admin.payments || '/', icon: Icons.Payment, name: 'Payments' },
    { url: NavLink.admin.security || '/', icon: Icons.Security, name: 'Security' },
    { url: NavLink.admin.accesstoken || '/', icon: Icons.Security, name: 'Access token' },
]

export { user_navigation, admin_navigation };